import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InterviewList from './component/InterviewList';
import InterviewInsert from './component/InterviewInsert';
import InterviewModify from './component/interviewModify';


function App() {
  return (
    <div className="Wrap">
      <Routes>
        <Route path='/' element={<InterviewList dbinfo={ {         
         titlenm : '아마존 인터뷰목록', 
         botable : 'interviewList',
         crud : 'select',
         mapper : 'introduceSQL',
         mapperid : 'interviewList'
         }
        }></InterviewList>}>
      </Route>

        <Route path='/interviewModify:key_id' element={<InterviewModify></InterviewModify>}></Route>

        <Route path='/' element={<InterviewInsert dbinfo={ {         
         titlenm : '아마존 폼태그', 
         botable : 'interviewWrite',
         crud : 'insert',
         mapper : 'introduceSQL',
         mapperid : 'interviewInsert'
         }
        }></InterviewInsert>}></Route>
      </Routes>
    </div>
  )};