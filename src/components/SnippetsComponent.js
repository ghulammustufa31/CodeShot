import React from 'react';
import Code from './CodeComponent';


function Snippets(props) {

    

    const renderSnippets = (snippets, filteredSnippets) => {
        console.log(filteredSnippets);
        console.log(snippets);
        if (filteredSnippets != null) {
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