import { Helmet } from 'react-helmet-async';

type HeadProps = {
    title?: string;
    description?: string;
};



export const Head = ({title = '', description = ''}:HeadProps= {}) => {
    return (
    <Helmet
      title={title ? `${title} | Naoya's portfolio` : undefined}
      meta={[
        {name: 'description', content: description},
        {property: 'og:title', content: title},
        {property: 'og:description', content: description},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: "Naoya's portfolio"},
        {property: 'og:image', content: 'https://naoya0117.com/logo.png'},
      ]}
    >
    </Helmet>
  );

};