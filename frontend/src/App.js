import { Route, Routes } from 'react-router-dom';
import InterviewList from './component/InterviewList';
import InterviewInsert from './component/InterviewInsert';



function App() {
  return (
    <div className="Wrap">
      <InterviewList dbinfo={ {         
         titlenm : '아마존 인터뷰목록', 
         botable : 'interviewList',
         crud : 'select',
         mapper : 'introduceSQL',
         mapperid : 'interviewList'
         }
        }></InterviewList>

      <Routes>
      <Route path='/' element={<InterviewInsert dbinfo={ {         
         titlenm : '아마존 폼태그', 
         botable : 'interviewWrite',
         crud : 'insert',
         mapper : 'introduceSQL',
         mapperid : 'interviewInsert'
         }
        }></InterviewInsert>}></Route>   
      <Route path='/interviewModify:no' element={<InterviewInsert dbinfo={ {         
         titlenm : '수정시 주소의 no변수필수 : 아마존 폼태그 글쓰기와 동일한 컴포넌트를 사용한다.', 
         botable : 'interviewModify',
         crud : 'modify',
         mapper : 'introduceSQL',
         mapperid : 'interviewModify'
         }
        }></InterviewInsert>}></Route>   


      </Routes>



    </div>
  )};