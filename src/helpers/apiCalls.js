export async function postAuth(data = { url: "", payload: {} }) {
  const response = await fetch(data.url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data.payload),
  });
  const destiledData = await response.json();
  return destiledData;
}

export async function fetchTodo(
  data = { url: "", method: "", token: "", payload: {} }
) {
  let options = {
    method: data.method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer: ${data.token}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  if (data.method === "POST") options.body = JSON.stringify(data.payload);

  const response = await fetch(data.url, options);
  const destiledData = await response.json();
  return destiledData;
}
