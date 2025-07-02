import { CmnNavList } from "../organisms/CmnNavList";

export const CmnNavInner = () => {
  return (
    <nav className="sm:min-w-[90px] sm:max-w-[300px] sm:mr-[8%] sm:mt-[1rem]">
      <CmnNavList />
    </nav>
  );
};