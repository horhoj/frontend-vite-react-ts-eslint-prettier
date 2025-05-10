import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Select.module.scss';
import { useOutsideClick } from '~/ui/hooks/useOutsideClk';
import { SelectOption } from '~/ui/components/Select/Select.types';
import { getUUID } from '~/utils/getUUID';

interface SelectProps {
  options: SelectOption[];
  onChange?: (value: string) => void;
  value?: string;
}

const DROPDOWN_SPACE_BELOW_FIX = 10;

export function Select({ options, onChange, value }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const actualOptions = useMemo(() => options.map((option) => ({ ...option, id: getUUID() })), [options]);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  const title = useMemo(() => options.find((el) => el.value === value)?.title, [options, value]);

  const handleElementClk = () => {
    setIsOpen(true);
  };

  const handleChange = (value: string) => {
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  useLayoutEffect(() => {
    if (!isOpen || !containerRef.current || !dropdownRef.current) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const dropdownHeight = dropdownRef.current.offsetHeight;

    const spaceBelow = window.innerHeight - rect.bottom - DROPDOWN_SPACE_BELOW_FIX;
    const spaceAbove = rect.top;

    setOpenUpward(dropdownHeight > spaceBelow && spaceAbove > spaceBelow);
  }, [isOpen]);

  return (
    <div className={styles.Select} ref={containerRef}>
      <button className={styles.Select__element} onClick={handleElementClk}>
        <span className={styles.Select__elementTitle}>{title}</span>
      </button>
      {isOpen && (
        <ul
          className={classNames(styles.Select__dropdownContent, openUpward && styles.up)}
          tabIndex={-1}
          ref={dropdownRef}
        >
          {actualOptions.map((option) => (
            <li key={option.id} className={classNames(styles.Select__option)}>
              <button
                className={styles.Select__optionContent}
                tabIndex={-1}
                onClick={() => handleChange(option.value)}
                title={option.title}
              >
                {option.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
