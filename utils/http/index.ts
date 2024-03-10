export type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

const defaultConfig = {
  useFormURLEncoded: false,
};

function buildBody(params: { [key: string]: any }) {
  const body = new URLSearchParams();
  for (let d in params) {
    body.append(d, params[d]);
  }
  return body;
}

export async function fetchMethod(
  method: Method,
  endpoint: string,
  params?: object,
  config?: any
): Promise<any> {
  const requestConfig = {
    ...defaultConfig,
    ...config,
  };

  const url = `${API_HOST}${endpoint}`;

  try {
    const res = await fetch(url, {
      method,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: config?.token,
      },

      ...(method !== "GET" && {
        body: requestConfig.useFormURLEncoded
          ? buildBody(params || {})
          : JSON.stringify(params),
      }),
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(String(error));
  }
}

export const http = {
  get: async (endpoint: string, params: object = {}, config: object = {}) => {
    let url = endpoint;

    let formattedParams = Object.entries(params).reduce(
      (acc: string, curr, index) => {
        if (typeof curr[1] === "object") {
          return `${acc}${index > 0 ? "&" : "?"}${curr[1]
            .map((value: any) => `${curr[0]}=${encodeURIComponent(value)}`)
            .join("&")}`;
        } else {
          return `${acc}${index > 0 ? "&" : "?"}${curr[0]}=${encodeURIComponent(
            curr[1]
          )}`;
        }
      },
      ""
    );
    if (Object.keys(params).length) {
      url = `${endpoint}${formattedParams}`;
    }
    return fetchMethod("GET", url, {}, config);
  },
  post: (endpoint: string, params: object, config: object = {}) =>
    fetchMethod("POST", endpoint, params, config),
  patch: (endpoint: string, params: object, config: object = {}) =>
    fetchMethod("PATCH", endpoint, params, config),
  put: (endpoint: string, params: object, config: object = {}) =>
    fetchMethod("PUT", endpoint, params, config),
  delete: (endpoint: string, params: object, config: object = {}) =>
    fetchMethod("DELETE", endpoint, params, config),
};
