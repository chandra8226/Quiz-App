import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initQuizOptions, setPlayerName, setQuestions } from '../Redux/player/player.actions';
import { suffledQuestions } from '../utils/questions';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [name, setName] = React.useState('');

  const page = useSelector((state) => state.player.currentPage);
  const playerName = useSelector((state) => state.player.playerName);
  // console.log(playerName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (playerName !== null) {
      if (page === null) navigate('/result');
      else navigate(`/quiz/${page}`);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPlayerName(name));
    // Navigate to quiz page
    dispatch(setQuestions(suffledQuestions));
    dispatch(initQuizOptions());
    return navigate('/quiz/1');
  };
  return (
    <div className="bg-neutral-800">
      <form className="flex flex-col w-full h-screen justify-center items-center space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 border border-black rounded-md w-64"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="bg-blue-500 p-2 rounded-lg text-white w-1/12 hover:bg-green-800 text-base font-medium" type="submit" onClick={handleSubmit}>
          Start
        </button>
      </form>
    </div>
  );
}

export default Home;
