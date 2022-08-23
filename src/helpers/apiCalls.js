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
  const response = await fetch(data.url, {
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
    body: JSON.stringify(data.payload),
  });
  const destiledData = await response.json();
  return destiledData;
}
