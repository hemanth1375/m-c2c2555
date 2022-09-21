import React from "react";
import { FormattedMessage } from "react-intl";
// import { startCase, camelCase } from "lodash";
// not converting to local camel or start case

const translate = (id: string, value: object = {}) => {
  const convertedId = id.toLocaleLowerCase("fr-ca");

  return <FormattedMessage id={convertedId} values={{ ...value }} />;
};
export default translate;
