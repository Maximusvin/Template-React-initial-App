const PARAM_PREFIX = ':';

export default function pathMaker(path) {
  return function createPath(params = {}) {
    return Object.entries(params).reduce(
      (resultPath, [key, value]) =>
        resultPath.replace(
          new RegExp(`${PARAM_PREFIX}${key}`),
          value.toString(),
        ),
      path,
    );
  };
}

export const ROUTE_PATHS = {
  _: pathMaker('/'),
  CONTACTS: {
    _: pathMaker('/contacts'),
    BY_ID: {
      _: pathMaker('/contacts/:contactId'),
    },
  },
};
