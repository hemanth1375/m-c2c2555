import React from "react";
import { FormattedMessage } from "react-intl";

const translate = (id: string, value: object = {}) => {
  // const convertedId = id.toUpperCase();
  return <FormattedMessage id={id} values={{ ...value }} />;
};
export default translate;
