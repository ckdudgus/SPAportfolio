import InterviewInsert from './component/InterviewInsert';


function App() {
  return (
    <div className="Wrap">
      <InterviewInsert dbinfo={ {         
         titlenm : '아마존 폼태그', 
         botable : 'interviewwrite',
         crud : 'insert',
         mapper : 'introduceSQL',
         mapperid : 'interviewInsert'
         }
        }></InterviewInsert>

    </div>
  );
}