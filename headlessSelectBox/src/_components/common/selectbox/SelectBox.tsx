import HeadlessSelect from "./HeadlessSelect";

type Props<
  ResponseData,
  OptionItems,
  ProcessedData extends { id: string; name: string }[]
> = {
  styles: {
    animation: string;
    container: string;
    selectButton: string;
    optionUl: string;
    optionLi: string;
    optionButton: string;
  };
  apiUrl: string;
  method: string;
  dataAccessor: (response: ResponseData) => OptionItems;
  extractOptionString: (options: OptionItems) => ProcessedData;
};

function SelectBox<
  ResponseData,
  OptionItems,
  ProcessedData extends { id: string; name: string }[]
>({
  styles,
  apiUrl,
  method,
  dataAccessor,
  extractOptionString,
}: Props<ResponseData, OptionItems, ProcessedData>) {
  // styles가 없으면 이걸쓰겠다 하는 styles를 만들어서 사용하는 방법
  const initStyles = {
    container: "relative",
    selectButton:
      "border-[1px] border-gray-400 rounded-[8px] p-[10px] w-[200px] ",
    optionUl:
      "absolute left-0 top-[60px] border-[1px] border-gray-400 rounded-[8px] p-[10px] w-[200px]",
    optionLi: "hover:bg-gray-400 rounded-[4px] p-[4px]",
    optionButton: "w-full h-full",
    animation: "animate-wave",
  };

  return (
    <HeadlessSelect
      apiUrl={apiUrl}
      method={method}
      dataAccessor={dataAccessor}
      extractOptionString={extractOptionString}
    >
      {({ isOpen, openToggle, options, selectedOption, optionSelector }) => {
        console.log(styles.animation);
        return (
          <>
            <div className={styles.container || initStyles.container}>
              <button
                onClick={openToggle}
                className={styles.selectButton || initStyles.selectButton}
              >
                옵션을 선택해주세요.
              </button>

              {isOpen && options && (
                <ul
                  className={`${styles.optionUl || initStyles.optionUl} ${
                    isOpen ? styles.animation : "undefined"
                  }`}
                >
                  {options.map((option) => {
                    console.log(option);
                    return (
                      <li
                        key={option.id}
                        className={styles.optionLi || initStyles.optionLi}
                      >
                        <button
                          className={
                            styles.optionButton || initStyles.optionButton
                          }
                          value={option.name}
                          onClick={optionSelector}
                        >
                          {option.name}
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <p>선택된 옵션 : {selectedOption}</p>
                  </li>
                </ul>
              )}
            </div>
          </>
        );
      }}
    </HeadlessSelect>
  );
}

export default SelectBox;
