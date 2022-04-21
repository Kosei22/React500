import React, { FC, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IUser } from "../model/IUser";
import { UserService } from "../services/UserService";

interface IProps {}

interface IState {
  loading: boolean;
  user: IUser;
  errorMessage: string;
}

interface URLParams {
  id: string;
}

const UserDetail: FC<IProps> = (props) => {
  const { id } = useParams<URLParams | any>();

  const [state, setState] = useState<IState>({
    loading: false,
    user: {} as IUser,
    errorMessage: ""
  });

  useEffect(() => {
    if (id) {
      setState((prev) => ({ ...prev, loading: !prev.loading }));
      UserService.getUser(id)
        .then((response) => {
          setState((prev) => ({
            ...prev,
            loading: false,
            user: response.data
          }));
        })
        .catch((error) => {
          setState((prev) => ({
            ...prev,
            loading: false,
            errorMessage: error.message
          }));
        });
    }
  }, [id]);

  if (state.loading) {
    return <div>LOADING......</div>;
  }

  const { user, loading, errorMessage} = state

  return (
    <>
      <h3>User Detail</h3>
      {
          Object.keys(user).length > 0 && (
              <div className="row">
                  <div className="col">
                      <div className="list-group">
                          <li className="list-group-item">
                              Name: <span className="fw-bold">{user.name}</span>
                          </li>
                          <li className="list-group-item">
                              Phone: <span className="fw-bold">{user.phone}</span>
                          </li>
                          <li className="list-group-item">
                              Email: <span className="fw-bold">{user.email}</span>
                          </li>
                          <li className="list-group-item">
                              Company: <span className="fw-bold">{user.company.name}</span>
                          </li>
                          <li className="list-group-item">
                              City: <span className="fw-bold">{user.address.city}</span>
                          </li>
                      </div>
                  </div>
              </div>
          )
      }

      <div className="row">
          <div className="col">
              <Link to="/users" className="btn btn-success mt-3">Back</Link>
          </div>
      </div>
    </>
  );
};

export default UserDetail;
