import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../atomic';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error }: { error?: Error }) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
      <h3 className="text-lg font-semibold mb-2">{t('errors.somethingWentWrong')}</h3>
      <p className="text-sm mb-4">{error?.message || t('errors.unexpectedError')}</p>
      <Button
        severity="secondary"
        label={t('common.retry')}
        onClick={() => window.location.reload()}
      />
    </div>
  );
}; 