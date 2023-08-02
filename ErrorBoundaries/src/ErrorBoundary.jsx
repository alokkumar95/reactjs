import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("error --", error, "errorInfor--", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went Wrong...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
