// @flow

import './App.css';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { Helmet } from 'react-helmet';
// import mona from './mona.png';

function WishCalculator(props: { language: Language }): React.Node {
  const [totalWishes, setTotalWishes] = useState<int>(0);
  const [desiredCopies, setDesiredCopies] = useState<int>(0);
  const [highestTotalWishes, setHighestTotalWishes] = useState<int>(0);
  const [highestCopies, setHighestCopies] = useState<int>(0);
  const [result, setResult] = useState<num>(-1);
  const [displayResult, setDisplayResult] = useState<React.Node>('\xa0');

  const [memoizeState, setMemoizeState] = useState<Array<Array<?num>>>([]);
  const [memoizeGuaranteedState, setMemoizeGuaranteedState] = useState<Array<Array<?num>>>([]);
  const [singleRates, setSingleRates] = useState<Array<num>>([]);

  const rate = 0.006;
  const pityIncrease = 0.06;
  const softPity = 74;

  useEffect(() => {
    let chance_of_win_at_specific_wish = [];
    let chance_of_losing_all_prev_wishes = 1;
    let curr_rate = rate;
    for (let curr_wish_num = 1; curr_wish_num <= 90; curr_wish_num++) {
      if (curr_wish_num >= softPity) {
        curr_rate += pityIncrease;
        curr_rate = Math.min(curr_rate, 1);
      }
      chance_of_win_at_specific_wish.push(chance_of_losing_all_prev_wishes * curr_rate);
      chance_of_losing_all_prev_wishes *= 1 - curr_rate;
    }
    setSingleRates(chance_of_win_at_specific_wish);
  }, []);

  const getSingleRate = (wishNum: num): num => {
    return singleRates[wishNum - 1];
  };

  const handleClick = () => {
    let memoize = Array(desiredCopies)
      .fill()
      .map(() => Array(totalWishes).fill(-1));
    let memoizeGuaranteed = Array(desiredCopies)
      .fill()
      .map(() => Array(totalWishes).fill(-1));

    // console.log(memoize, memoize[0]);

    const setMemoize = (constellation: int, wishNum: int, rate: num): void => {
      memoize[constellation][wishNum - 1] = rate;
    };
    const getMemoize = (constellation: int, wishNum: int): num => {
      if (constellation < 0) {
        return 1;
      }
      if (wishNum <= 0) {
        return 0;
      }
      return memoize[constellation][wishNum - 1];
    };
    const setMemoizeGuaranteed = (constellation: int, wishNum: int, rate: num): void => {
      memoizeGuaranteed[constellation][wishNum - 1] = rate;
    };
    const getMemoizeGuaranteed = (constellation: int, wishNum: int): num => {
      if (constellation < 0) {
        return 1;
      }
      if (wishNum <= 0) {
        return 0;
      }
      return memoizeGuaranteed[constellation][wishNum - 1];
    };

    // console.log('starting');

    for (let constellation = 0; constellation < desiredCopies; constellation++) {
      for (let wishNum = 1; wishNum <= totalWishes; wishNum++) {
        // console.log('starting', constellation, wishNum);
        if (wishNum > 90 && getMemoize(constellation - 1, wishNum - 90) >= 1) {
          setMemoizeGuaranteed(constellation, wishNum, 1);
        } else {
          let expectedRate = 0;
          for (let currWishNum = 1; currWishNum <= Math.min(90, wishNum); currWishNum++) {
            // console.log('counting', currWishNum, constellation, wishNum);
            expectedRate += getSingleRate(currWishNum) * getMemoize(constellation - 1, wishNum - currWishNum);
          }
          // console.log(expectedRate, constellation, wishNum);
          setMemoizeGuaranteed(constellation, wishNum, expectedRate);
        }
      }

      for (let wishNum = 1; wishNum <= totalWishes; wishNum++) {
        if (
          wishNum > 90 &&
          getMemoize(constellation - 1, wishNum - 90) >= 1 &&
          getMemoizeGuaranteed(constellation, wishNum - 90) >= 1
        ) {
          setMemoize(constellation, wishNum, 1);
        } else {
          let expectedRate = 0;
          for (let currWishNum = 1; currWishNum <= Math.min(90, wishNum); currWishNum++) {
            expectedRate += getSingleRate(currWishNum) * 0.5 * getMemoize(constellation - 1, wishNum - currWishNum);
            expectedRate +=
              getSingleRate(currWishNum) * 0.5 * getMemoizeGuaranteed(constellation, wishNum - currWishNum);
          }
          setMemoize(constellation, wishNum, expectedRate);
        }
      }
    }
    setMemoizeState(memoize);
    setMemoizeGuaranteedState(memoizeGuaranteed);

    console.table(memoize);
    console.log(desiredCopies, totalWishes);
    setResult(getMemoize(desiredCopies - 1, totalWishes));
  };

  const resultNearGuaranteed = result > 0.9999 && result < 1;
  const oneIn = Math.round((1 / result) * 10) / 10;

  useEffect(() => {
    if (result >= 0) {
      setDisplayResult(
        `You have a ${resultNearGuaranteed ? '>99.99' : parseFloat((result * 100).toPrecision(4))}% ${
          result < 0.5 && result > 0 ? ' (1 in ' + oneIn + ')' : ''
        } chance of getting ${desiredCopies} copies in ${totalWishes} wishes.`,
      );
    }
  }, [result]);

  // const displayResult =
  // result >= 0
  // ? `You have a ${resultNearGuaranteed ? '>99.99' : parseFloat((result * 100).toPrecision(4))}% ${
  // result < 0.5 ? ' (1 in ' + oneIn + ')' : ''
  // } chance of getting ${desiredCopies} copies in ${totalWishes} wishes.`
  // : ;

  // const calcBackground = {
  // backgroundImage: mona,
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center center',
  // };

  return (
    <>
      <header className="Calc-page">
        <Helmet>
          <title>Genshin character event wish confidence intervals</title>
        </Helmet>
        <div className="Calc-horiz-layout-left">
          <div>Genshin character event wish confidence intervals</div>
          <div className="App-horiz-layout-unspaced">
            {'Number of wishes you have: '}{' '}
            <input
              type="number"
              className="Text-input"
              value={totalWishes}
              onChange={(event) => setTotalWishes(Math.max(0, Math.min(2000, Math.trunc(event.target.value))))}
            />
          </div>
          <div className="App-horiz-layout-unspaced">
            {'Number of copies you want: '}{' '}
            <input
              type="number"
              className="Text-input"
              value={desiredCopies}
              onChange={(event) => setDesiredCopies(Math.max(1, Math.min(7, Math.trunc(event.target.value))))}
            />
          </div>
          <div className="App-horiz-layout-unspaced">
            <label>Wish base success rate: </label>
            <input type="number" className="Text-input" value={0.006} disabled />
          </div>
          <div className="App-horiz-layout-unspaced">
            <label>Soft pity: </label>
            <input type="number" className="Text-input" value={74} disabled />
          </div>
          <div className="App-horiz-layout-unspaced">
            <label>Success rate increase per wish beginning at soft pity:</label>
            <input type="number" className="Text-input" value={0.06} disabled />
          </div>
          <div className="App-horiz-layout-unspaced">
            <button onClick={handleClick}>Submit</button>
          </div>
          <div className="App-horiz-layout-unspaced">{displayResult}</div>
        </div>
        <div className="Calc-horiz-layout-right"></div>
      </header>
    </>
  );
}

export default WishCalculator;
