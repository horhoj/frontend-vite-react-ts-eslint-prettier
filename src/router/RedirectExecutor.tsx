import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '~/store/hooks';

export const RedirectExecutor: React.FC = () => {
  const redirectUrl = useAppSelector((state) => state.app.redirectUrl);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectUrl) {
      navigate(redirectUrl.path);
    }
  }, [redirectUrl]);

  return null;
};
