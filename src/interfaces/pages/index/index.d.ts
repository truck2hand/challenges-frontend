import { WithTranslation } from 'react-i18next';

export interface IndexProps extends WithTranslation {
  router: SingletonRouter;
  t: i18next.TFunction;
  counter: number;
}

export interface IndexInitialProps {
  namespacesRequired: string[];
}

export { IndexProps, IndexInitialProps };
