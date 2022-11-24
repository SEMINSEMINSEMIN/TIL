import Privacy from './Components/Privacy'
import Certificate from './Components/Certificate'
import Career from './Components/Career'
import Awards from './Components/Awards'

function App() {
  return (
    <div>
      <h1>이력서</h1>
      <Privacy 
        name='강세민' 
        phone='01066372383' 
        github='SEMINSEMINSEMIN'
      />
      <Certificate 
        title='자격증'
        contents='사회조사분석사'
      />
      <Certificate
        title='학력'
        contents='숙명여자대학교'
      />
      <Career/>
      <Awards/>
    </div>
  );
}
export default App;
