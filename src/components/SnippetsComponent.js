import React from 'react';
import Code from './CodeComponent';


function Snippets(props) {

    

    const renderSnippets = (snippets, filteredSnippets) => {
        if (filteredSnippets != null) {
            if (filteredSnippets.length > 0) {
                return (
                    <div>
                        {
                            filteredSnippets.map((snippet) => {
                                return (
                                    <div key={snippet.id} className="m-3 mt-5">
                                        <Code snippet={snippet} />
                                    </div>
                            )})
                        }
                    </div>
                );
            }
            else {
                return (
                    <div className="ml-3 mt-5" >
                        <h1>No data available</h1>
                    </div>
                );
            }
            
        }
        else {
            return (
                <div>
                    {
                    snippets.map((snippet) => {
                        return (
                        <div key={snippet.id} className="m-3 mt-5">
                            <Code snippet={snippet} />
                        </div>
                    )})
                    }
                </div>
            );
        }
        
    }

    return (
        <div>
            {
                renderSnippets(props.snippets, props.filteredSnippets)
            }
        </div>
        
    );
    
}

export default Snippets;