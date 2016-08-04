import React from 'react';
import { ThemeChooser } from 'react-bootstrap-theme-switcher';

class PageOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let form =
    <form className="form-horizontal" style={{maxWidth: 600}}>
      <fieldset>
        <div className="form-group">
          <label for="inputEmail" className="col-lg-2 control-label">Email</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Checkbox
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="textArea" className="col-lg-2 control-label">Textarea</label>
          <div className="col-lg-10">
            <textarea className="form-control" rows="3" id="textArea"></textarea>
            <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
          </div>
        </div>
        <div className="form-group">
          <label className="col-lg-2 control-label">Radios</label>
          <div className="col-lg-10">
            <div className="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
                Option one is this
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                Option two can be something else
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Selects</label>
          <div className="col-lg-10">
            <select className="form-control" id="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <br/>
            <select multiple="" className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="reset" className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>

    let alerts =
    <div>
      <div className="alert alert-dismissible alert-success">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h4>Success</h4>
        <p>Success message goes here <a href="#" className="alert-link">A Link</a>.</p>
      </div>

      <div className="alert alert-dismissible alert-info">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h4>Info</h4>
        <p>Info message goes here <a href="#" className="alert-link">A Link</a>.</p>
      </div>

      <div className="alert alert-dismissible alert-warning">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h4>Warning</h4>
        <p>Warning message goes here <a href="#" className="alert-link">A Link</a>.</p>
      </div>

      <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h4>Danger</h4>
        <p>Danger message goes here <a href="#" className="alert-link">A Link</a>.</p>
      </div>
    </div>

    let panels =
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Panel success</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Panel info</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Panel warning</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">Panel danger</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
      </div>

    let nav1 =
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Nav default</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li><a href="#"> Option 1</a></li>
              <li><a href="#"> Option 2</a></li>
              <li><a href="#"> Option 3</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"> Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>

      let nav2 =
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#" className="navbar-brand">Nav Inverse</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul className="nav navbar-nav">
                <li><a href="#"> Option 1</a></li>
                <li><a href="#"> Option 2</a></li>
                <li><a href="#"> Option 3</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"> Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>


    return (
      <div>
        <div className="row" style={{marginBottom: '2em'}}>
          <div className="col-md-12">
            <ThemeChooser style={{display: 'inline'}} themePath="/theme-switcher/themes"/> <span style={{fontSize: '1.0em'}}> This is the ThemeChooser Component</span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {nav1}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {nav2}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3>Buttons</h3>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-default" style={{marginLeft: '1em'}}>Default</button>
            <button className="btn btn-warning" style={{marginLeft: '1em'}}>Warning</button>
            <button className="btn btn-danger" style={{marginLeft: '1em'}}>Danger</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3>Forms</h3>
            {form}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3>Paneles</h3>
            {panels}
          </div>
          <div className="col-md-6">
            <h3>Alerts</h3>
            {alerts}
          </div>
        </div>
      </div>
    );
  }
}

export default PageOne;
