const fetchData = async (
  { url, method = 'POST', token = '', body = null },
  dispatch
) => {
  const headers = token
    ? { 'Content-Type': 'application/json', authorization: `Bearer ${token}` }
    : { 'Content-Type': 'application/json' };
  body = body ? { body: JSON.stringify(body) } : {};
  try {
    const response = await fetch(url, { method, headers, ...body });
    const data = await response.json();
    if (!data.success) {
      if (response.status === 401)
        dispatch({ type: 'UPDATE_USER', payload: null });
      throw new Error(data.message);
    }
    return data.result;
  } catch (error) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'error', message: error.message },
    });
    console.log(error);
    return null;
  }
};

export default fetchData;
