import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "~/components/Command";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/Popover";
import {
  type AllOptions,
  POPULAR,
  allOptions,
  isValidOption,
  oaiEncodings,
  oaiModels,
  openSourceModels,
} from "~/models";

export function EncoderSelect(props: {
  value: AllOptions;
  onChange: (value: AllOptions) => void;
  isLoading?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { value } = props;

  const onSelect = (v: AllOptions) => () => {
    setOpen(false);
    if (isValidOption(v)) {
      props.onChange(v);
    } else {
      console.error("Invalid option", v, allOptions.options);
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-[300px] justify-between"
          >
            <span className="flex items-center gap-2">
              <span>{value}</span>
              {props.isLoading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-700 border-b-transparent" />
              )}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-h-[70vh] overflow-auto p-0 pb-2">
          <Command>
            <CommandInput placeholder="Search model or encoder..." />
            <CommandEmpty>
              <div className="py-6 text-center text-sm">
                <p className="text-slate-500 italic mb-2">No model or encoder found.</p>
                <p className="text-slate-400 text-xs">
                  Need a specific model?{" "}
                  <a
                    href="mailto:huzhengnan@foxmail.com?subject=Model%20Request"
                    className="text-blue-500 hover:underline"
                  >
                    Email us
                  </a>
                </p>
              </div>
            </CommandEmpty>
            <CommandGroup heading="Popular">
              {POPULAR.map((value) => (
                <CommandItem
                  key={value}
                  value={value}
                  onSelect={onSelect(value)}
                >
                  {value}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Open-Source Models">
              {openSourceModels.options
                .filter((x) => !POPULAR.includes(x))
                .map((value) => (
                  <CommandItem
                    key={value}
                    value={value}
                    onSelect={onSelect(value)}
                  >
                    {value}
                  </CommandItem>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="OpenAI Encodings">
              {oaiEncodings.options
                .filter((x) => !POPULAR.includes(x))
                .map((value) => (
                  <CommandItem
                    key={value}
                    value={value}
                    onSelect={onSelect(value)}
                  >
                    {value}
                  </CommandItem>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="OpenAI Models">
              {oaiModels.options
                .filter((x) => !POPULAR.includes(x))
                .map((value) => (
                  <CommandItem
                    key={value}
                    value={value}
                    onSelect={onSelect(value)}
                  >
                    {value}
                  </CommandItem>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <div className="py-3 px-4 text-center">
              <p className="text-xs text-slate-400">
                Can&apos;t find a model you need?{" "}
                <a
                  href="mailto:huzhengnan@foxmail.com?subject=Model%20Request"
                  className="text-blue-500 hover:underline"
                  onClick={(e) => {
                    // Fallback for cases where mailto doesn't work
                    if (!window.location.href.startsWith('mailto:')) {
                      e.preventDefault();
                      window.open(`mailto:huzhengnan@foxmail.com?subject=Model Request`);
                    }
                  }}
                >
                  Email us
                </a>
              </p>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
