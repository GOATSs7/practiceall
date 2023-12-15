import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const GitHubProject = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoaing] = useState(true);

  const getUser = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      setLoaing(true);
      const data = await res.json();
      setUsers(data);
      setLoaing(false);
    } catch (error) {
      setLoaing(true);
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
                <h5 className="card-title">Username: {user.login}</h5>
                <p className="card-text">Type: {user.type}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Public Repos: </b>
                    <a href={user.repos_url} className="highlight-link">
                      See Public Repos
                    </a>
                  </li>
                  <li className="list-group-item">
                    <b>Followers: </b>
                    <a href={user.followers_url} className="highlight-link">
                      See Followers
                    </a>
                  </li>
                  <li className="list-group-item">
                    <b>Following: </b>{" "}
                    <a href={user.following_url} className="highlight-link">
                      See Following
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
