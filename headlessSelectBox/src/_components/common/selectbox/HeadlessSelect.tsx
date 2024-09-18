import useSelectAction from "@/_lib/useSelectAction";

type Props<ResponseData, OptionItems, ProcessedData extends unknown[]> = {
  children: ({
    isOpen,
    openToggle,
    options,
    selectedOption,
    optionSelector,
  }: {
    isOpen: boolean;
    openToggle: () => void;
    options: ProcessedData;
    selectedOption: string;
    optionSelector: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }) => JSX.Element;
  apiUrl: string;
  method: string;
  dataAccessor: (response: ResponseData) => OptionItems;
  extractOptionString: (options: OptionItems) => ProcessedData;
};

function HeadlessSelect<
  ResponseData,
  OptionItems,
  ProcessedData extends unknown[]
>({
  children,
  apiUrl,
  method,
  dataAccessor,
  extractOptionString,
}: Props<ResponseData, OptionItems, ProcessedData>) {
  const { isOpen, openToggle, options, selectedOption, optionSelector } =
    useSelectAction({
      apiUrl,
      method,
      dataAccessor,
      extractOptionString,
    });

  return children({
    isOpen,
    openToggle,
    options,
    selectedOption,
    optionSelector,
  });
}

export default HeadlessSelect;
