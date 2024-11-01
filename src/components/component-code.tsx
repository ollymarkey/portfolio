/* ---
// ComponentWrapper.astro
import React, { useState } from "react";
import "prismjs/themes/prism.css"; // Include Prism theme for code highlighting

const { sourceCode, children, framework = "Component" } = Astro.props;
const [isCodeVisible, setCodeVisible] = useState(false);

function toggleCode() {
    setCodeVisible(!isCodeVisible);
}
---

export default function ComponentCode() {
    return (
        <div class="component-wrapper">
            <h3>{framework}</h3>
            {children}

            <button onClick={toggleCode}>
                {isCodeVisible ? "Hide Code" : "Show Code"}
            </button>

            {
                isCodeVisible && (
                    <pre class="code">
                        <code class="language-js">{sourceCode}</code>
                    </pre>
                )
            }
        </div>
    );
}

<style>
    .component-wrapper {
        border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 2rem;
    position: relative;
    }

    button {
        margin - top: 1rem;
    }

    pre.code {
        margin - top: 1rem;
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 5px;
    }
</style>
 */