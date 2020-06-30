import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import store, { injectAsyncReducer } from '../../store/index';
import AAA, { namespace } from './model';

function index(props) {
  const [snapshot, setSnapshot] = useState(null);

  const Update = () => {
    setSnapshot(store.getState());
  };
  const dispatch = useDispatch();

  const handleFn = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: 1,
        content: '吃',
      },
    });
    Update();
  };
  const handleGetState = () => {
    Update();
    console.log(store.getState());
  };

  const handleInjectAsyncReducer = () => {
    injectAsyncReducer(namespace, AAA);
    Update();
  };

  useEffect(() => {
    console.log(store.getState());
  }, []);

  return (
    <>
      <h2>Dynamically Load Reducers</h2>
      <div className="toast toast-success">
        Webpack provides import() syntax, that conforms to the ECMAScript proposal for dynamic
        imports. Let’s try to split our code based on different entry points of your routes. This
        makes perfect sense, user that goes to mywebsite/foo do not need code that is written only
        for mywebsite/bar!
      </div>
      <div className="toast toast-success">
        By now, you should realise, reducer that is written only for mywebsite/bar, shouldn’t be
        imported or included when you are visiting mywebsite/foo! Then how do I dynamically load
        reducers for code splitting in a Redux application?
      </div>
      <div className="divider"></div>
      <div>
        <h6>全局原来存在的</h6>
        <button className="btn btn-primary" onClick={handleGetState}>
          Get Store
        </button>
        <br />
        <br />
        <h6>手动添加注入</h6>
        <button className="btn" onClick={handleInjectAsyncReducer}>
          Inject Async Reducer
        </button>
        <br />
        <br />
        <h6>Dispatch</h6>
        <button className="btn" onClick={handleFn}>
          Dispatch `ADD_TODO`
        </button>
      </div>
      <br />
      <br />
      {snapshot && <div>{JSON.stringify(snapshot, null, 4)}</div>}
    </>
  );
}

const mapState = state => ({ todos: state.todos });
export default connect(mapState)(index);
