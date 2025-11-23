import { widgetMapping } from "@/lib/widgetMapping";

interface MessageWidgetProps {
  dataArray: any[];
  size: string;
  objectType: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export function MessageWidget({ dataArray, size, objectType, ref }: MessageWidgetProps) {
  // console.log("MessageWidget received:", { dataArray, size, objectType });

  const MAXITEMS = 16;
  const WidgetComponent = widgetMapping[objectType]?.[size];
  
  if (!WidgetComponent) {
    console.warn(`No widget component found for ${objectType} ${size}`);
    return null;
  }

  const itemsToRender = dataArray.slice(0, MAXITEMS);

  // Render based on size layout
  if (size === "avatar") {
    // Avatar widgets: 4-column grid
    return (
      <div className="p-8" ref={ref}>
      <div className="grid grid-cols-4 gap-4">
        {itemsToRender.map((item, index) => (
          <WidgetComponent key={index} {...item} />
        ))}
      </div>
      </div>
    );
  } else if (size === "small") {
    // Expanded small: 2x2 grid
    return (
      <div className="flex py-2 px-6 justify-center"> {/* bubble padding*/}
        <div className="grid grid-cols-2 gap-8" ref={ref}>
          {itemsToRender.map((item, index) => (
            <WidgetComponent key={index} {...item} />
          ))}
        </div>
      </div>
    );
  } else if (size === "medium") {
    // Medium widgets: vertical stack
    return (
      <div className="p-8 my-4 w-full gap-4 flex flex-col" ref={ref}>
        {itemsToRender.map((item, index) => (
          <WidgetComponent key={index} {...item} />
        ))}
      </div>
    );
  } else if (size === "large") {
    // Large widgets: vertical stack with more spacing
    return (
      <div className="p-8 my-4 w-full gap-4 flex flex-col" ref={ref}>
        {itemsToRender.map((item, index) => (
          <WidgetComponent key={index} {...item} />
        ))}
      </div>
    );
  } else if (size === "extraLarge") {
    // Extra large: full width, single column
    return (
      <div className="space-y-8" ref={ref}>
        {itemsToRender.map((item, index) => (
          <WidgetComponent key={index} {...item} />
        ))}
      </div>
    );
  }

  return null;
}
