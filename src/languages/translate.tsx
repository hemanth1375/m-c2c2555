import React from "react";
import { FormattedMessage } from "react-intl";
// import { startCase, camelCase } from "lodash";
// not converting to local camel or start case

const translate = (id: string, value: object = {}) => {
  console.log(id.toLocaleUpperCase());
  return <FormattedMessage id={id} values={{ ...value }} />;
};
export default translate;
