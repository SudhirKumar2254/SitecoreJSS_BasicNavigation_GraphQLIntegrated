import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import { Link as RouterLink } from 'react-router-dom';

const TopMenuWithIntegratedMode = (props) => {
  console.log(props);
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }
  const { datasource, contextItem } = props.fields.data;

  return (
    <div data-e2e-id="graphql-integrated">
      {datasource && (
        <div>
          <br />
        </div>
      )}
      {contextItem && (
        <div>
          <nav>
            <div className="top_menu">
              <div className="container_12">
                <div className="grid_12">
                  <div id="mydroplinemenu" className="droplinebar">
                    <ul>
                      {contextItem.children.map((child) => (
                        <li key={child.id}>
                          <RouterLink to={child.url}>{child.pageTitle.value}</RouterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TopMenuWithIntegratedMode;
