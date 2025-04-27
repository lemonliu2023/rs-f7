import { App, Link, Navbar, Page, Toolbar, View } from 'framework7-react';
import './App.css';
import AboutPage from './pages/About/about';

const AppMain = () => {
  return (
    <App
      theme="auto"
      name="My App"
      routes={[
        {
          path: '/about',
          component: AboutPage,
        },
      ]}
    >
      {/* Your main view, should have "main" prop */}
      <View main>
        {/*  Initial Page */}
        <Page>
          {/* Top Navbar */}
          <Navbar title="Awesome App"></Navbar>
          {/* Toolbar */}
          <Toolbar bottom>
            <Link href="/about">Link 1</Link>
            <Link>Link 2</Link>
          </Toolbar>
          {/* Page Content */}
          <p>Page content goes here</p>
          <Link href="/about/">About App</Link>
        </Page>
      </View>
    </App>
  );
};

export default AppMain;
