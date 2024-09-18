import { useEffect, useState } from "react";

type UseSelectAction<
  ResponseData,
  OptionItems,
  ProcessedData extends unknown[]
> = {
  apiUrl: string;
  method: string;
  dataAccessor: (response: ResponseData) => OptionItems;
  extractOptionString: (options: OptionItems) => ProcessedData;
};

// type UseSelectAction<ResponseData, OptionItems extends [], ProcessedData> = () => ({
//   apiUrl: string;
//   method: string;
//   dataAccessor: (response: ResponseData) => OptionItems;
//   extractOptionString: (options: OptionItems) => ProcessedData;
// });

function useSelectAction<
  ResponseData,
  OptionItems,
  ProcessedData extends unknown[]
>({
  apiUrl,
  method,
  dataAccessor,
  extractOptionString,
}: UseSelectAction<ResponseData, OptionItems, ProcessedData>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<ProcessedData>(
    [] as unknown as ProcessedData
  );
  const [selectedOption, setSelectedOption] = useState<string>("");

  const optionSelector = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedOption(e.currentTarget.value);
  };

  useEffect(() => {
    const getFruits = async () => {
      try {
        const res = await fetch(apiUrl, { method });
        const data = await res.json();
        const options = dataAccessor(data);
        const extractedOptionString = extractOptionString(options);

        setOptions(extractedOptionString);
      } catch (error) {
        console.error(error);
      }
    };

    getFruits();
  }, [apiUrl, method]);

  const openToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    openToggle,
    options,
    selectedOption,
    optionSelector,
  };
}

export default useSelectAction;
