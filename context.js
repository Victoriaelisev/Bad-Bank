const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }
  <div>
  <div className="account">
    <Button
      variant="primary"
      className={`${
        selectedType === 'withdraw' ? 'active account-btn' : 'account-btn'
      }`}
      onClick={() => this.setSelectedType('withdraw')}
    >
      Withdraw
    </Button>
    <Button
      variant="secondary"
      className={`${
        selectedType === 'deposit' ? 'active account-btn' : 'account-btn'
      }`}
      onClick={() => this.setSelectedType('deposit')}
    >
      Deposit
    </Button>
    <Button
      variant="info"
      className={`${
        selectedType === 'summary' ? 'active account-btn' : 'account-btn'
      }`}
      onClick={() => this.setSelectedType('summary')}
    >
      Summary
    </Button>
  </div>
  <div>
    {selectedType === 'withdraw' || selectedType === 'deposit' ? (
      <AccountForm selectedType={selectedType} />
    ) : (
      <Summary />
    )}
  </div>
</div>
;