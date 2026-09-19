import React, { Component, type ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class MapErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Map component error caught by boundary:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="relative flex-1 min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] bg-[#07080c] rounded-xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
          <div className="size-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
            <AlertTriangle className="size-6" />
          </div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1 font-mono">
            {this.props.fallbackTitle || "Geospatial Viewport Reset"}
          </h3>
          <p className="text-xs text-neutral-400 max-w-md mb-5 leading-relaxed font-mono">
            The geospatial viewport encountered a rendering synchronization condition. Click below to re-initialize the real-time map canvas.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF7A00] text-black font-semibold text-xs hover:bg-[#ff8f26] transition-colors"
          >
            <RotateCcw className="size-3.5" />
            Reload Map Canvas
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
