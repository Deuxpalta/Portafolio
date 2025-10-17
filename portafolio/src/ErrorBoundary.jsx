import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2>Algo pasó</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
          <p>
            Verifica la consola del navegador y la terminal que ejecuta el servidor de desarrollo para obtener un seguimiento completo de la pila.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
