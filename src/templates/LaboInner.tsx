import type { LaboData } from '../assets/types';
import { PageTitle } from '../molecules/PageTitle';
import { LaboContents } from '../organisms/LaboContents';
import { NoArticles } from '../assets/laboArticles/NoArticles';
import { Test001 } from '../assets/laboArticles/test001';

type LaboInnerProps = {
  laboData: LaboData;
  currentPath: string;
};

export const LaboInner = (props: LaboInnerProps) => {
  let content;

  // assets/laboArticles/[name].tsxを追加したら、caseを追加する。
  // assets/jsons/labo.jsonにも追加する。
  switch (props.currentPath) {
    case '/labo/':
    case '': //チラつき防止
      content = <LaboContents laboContents={props.laboData.laboContents} />;
      break;
    case '/labo/test001':
      content = <Test001 />;
      break;
    default:
      content = <NoArticles />;
      break;
  }

  return (
    <div className="flex flex-col space-y-20">
      <PageTitle text="Labo" />
      {content}
    </div>
  );
};