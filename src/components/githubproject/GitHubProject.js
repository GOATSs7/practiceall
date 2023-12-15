import React, { useState, useEffect } from "react";

const GitHubProject = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm">
              <img
                src={user.avatar_url}
                className="card-img-top"
                alt={user.login}
              />
              <div className="card-body">
                <h5 className="card-title">Usename:{user.login}</h5>
                <p className="card-text">Type:{user.type}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Public Repos: </b>
                    <a href={user.repos_url} className="highlight-link">
                      {user.repos_url}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <b>Followers: </b>
                    <a href={user.followers_url} className="highlight-link">
                      {user.followers_url}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <b>Following: </b>{" "}
                    <a href={user.following_url} className="highlight-link">
                      {user.following_url}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProject;
