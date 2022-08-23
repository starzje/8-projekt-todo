export async function postData(data = { url: "", username: "", password: "" }) {
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
    body: JSON.stringify(data),
  });
  const destiledData = await response.json();
  return destiledData;
}
