export const getRecruitmentFetch = async (token, self) => {
  const response = await fetch("http://localhost:5001/api/recruitment", {
    method: `GET`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
};
