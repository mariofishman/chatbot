import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCcw } from "lucide-react";

interface ConnectionLostAlertProps {
  ref?: React.RefObject<HTMLDivElement | null>;
}

export function ConnectionLostAlert({ ref }: ConnectionLostAlertProps) {
  return (
    <div className="flex py-2 px-6 justify-center w-5/6 mx-auto" ref={ref}>
      <Alert variant="destructive" className="flex items-center gap-3">
        <AlertCircle className="h-6 w-6 flex-shrink-0" />
        <div className="flex-1 flex flex-col justify-center">
          <AlertTitle>Error: Connection Lost</AlertTitle>
          <AlertDescription>Please check your internet connection and try again.</AlertDescription>
        </div>
        <Button variant="outline" size="sm" className="flex-shrink-0">
          <RotateCcw className="h-3 w-3 mr-1" />
          Retry
        </Button>
      </Alert>
    </div>
  );
}
