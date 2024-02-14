//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
///////////////////          COMMON TYPES          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
type Breadcrumbs = {
  label: string;
  href: string;
};

type IPAddress = {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  isProxy: boolean;
  continent: string;
  continentCode: string;
};

type HubspotFormData = {
  submittedAt: string;
  portalId: string;
  fields: Array<{ name: string; value: string }>;
  formGuid: string;
  context: {
    hutk: string;
    pageUri: string;
    pageName: string;
    ipAddress: string;
  };
  legalConsentOptions: {
    legitimateInterest: {
      value: boolean;
      subscriptionTypeId: number;
      legalBasis: string;
      text: string;
    };
  };
};

type ObjectFit =
  | "fill"
  | "contain"
  | "cover"
  | "none"
  | "scale-down"
  | undefined;

type ObjectPosition =
  | "bottom"
  | "center"
  | "left"
  | "left bottom"
  | "left top"
  | "right"
  | "right bottom"
  | "right top"
  | "top"
  | undefined;

export type {
  Breadcrumbs,
  HubspotFormData,
  IPAddress,
  ObjectFit,
  ObjectPosition,
};
