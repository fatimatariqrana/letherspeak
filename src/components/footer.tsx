import { cn } from "~/lib/utils";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";
import { Badge } from "~/components/ui/badge";

const Section = {
  Root: (props: PropsWithChildren) => <div className="space-y-1" {...props} />,
  Label: (props: PropsWithChildren) => (
    <h4 className="text-md font-semibold" {...props} />
  ),
  List: (props: PropsWithChildren) => (
    <ul className="space-y-1 text-sm leading-7" {...props} />
  ),
  Item: ({
    disabled,
    className,
    ...props
  }: PropsWithChildren & ComponentProps<"li"> & { disabled?: boolean }) => (
    <li
      className={cn(
        className,
        disabled &&
          "white-sp cursor-not-allowed select-none text-muted-foreground",
      )}
      {...props}
    />
  ),
};
export const Footer = () => {
  return (
      <footer className="px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 border-t py-12 lg:grid-cols-5 lg:gap-4">
          <div className="col-span-3 flex flex-col justify-between space-y-2">
            <div className="space-y-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                
                  <h2 className="text-2xl font-bold">Let Her Speak</h2>
                </div>

                <div>
                  <Badge variant="outline">
                    <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                    Status: Operational
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Any data that is offensive or inappropriate can be reported and
                if found valid will be taken down.
              </p>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-4">
            <Section.Root>
              <Section.Label></Section.Label>

              <Section.List>
                <Section.Item>
                  <Link href="">
                  </Link>
                </Section.Item>
              </Section.List>
            </Section.Root>

            <Section.Root>
              <Section.Label></Section.Label>

              <Section.List>
                <Section.Item>
                  <Link href="">
                    
                  </Link>
                </Section.Item>
              </Section.List>
            </Section.Root>
          </div>
        </div>
      </footer>
  );
};
