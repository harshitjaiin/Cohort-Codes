import { useRecoilState, useRecoilValue , RecoilRoot } from 'recoil';
import { networkAtom, jobAtom, notificationAtom, messageAtom, totalSelector } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const [jobCount, setJobCount] = useRecoilState(jobAtom);
  const [notificationCount, setNotificationCount] = useRecoilState(notificationAtom);
  const [messageCount, setMessageCount] = useRecoilState(messageAtom);
  const totalCount = useRecoilValue(totalSelector);


  //not "me" me total sabhi ka sum dikhana hai 
  //ek appraoch could be to define another var and usko sbka sum k barabar krdo like

  // const total = networkCount+jobCount+notificationCount+messageCount;

  //but there is a problem with this ki har re-render me ye wapas calc ho raha mtlb agr ye 4 change bhi nhi horahe
  //but still kisi aur component ne bhi agr re-render trigger kia to bhi yeh re-render ho raha hai joki nhi hona chaie
 
  //for this we can also use an hook called "useMemo" ab ye sirf tabhi recalc hoga jab ye 4 me koi change hoga!
  
  // const total = useMemo(()=>{
  //   return networkCount+jobCount+notificationCount+messageCount;
  // } , [networkCount , jobCount , notificationCount , messageCount]);
  
  //this is rel better than upper option! But recoil also gives us a better way
  
  //Selectors can be used when we have to calc a value which depends only on the other atoms and no backend caling etc is reqd
  //to wo selector ki help se khud se values le sakta hai and change bhi kr dega khud se
  // that selector file is in atoms.js usme jake dekho ek bar the syntax and everything!
  return (
    <>
      <h1>Hello</h1>
      <button>Home</button>

      <button onClick={() => setNetworkCount(networkCount + 1)}>My network ({networkCount})</button>
      <button onClick={() => setJobCount(jobCount + 1)}>Jobs ({jobCount})</button>
      <button onClick={() => setNotificationCount(notificationCount + 1)}>Notifications ({notificationCount})</button>
      <button onClick={() => setMessageCount(messageCount + 1)}>Messages ({messageCount})</button>

      <button>Me ({totalCount})</button>
    </>
  );
}

export default App;
