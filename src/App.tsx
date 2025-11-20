import './App.css'

function App() {
  return (
    <div className="App">
      <h1>WebUI Playground</h1>
      <p className="subtitle">A diverse collection of frontend demonstrations and collectables</p>

      <div className="categories">
        <h2>Content Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>🔤 Typography</h3>
            <p>Font demonstrations and typographic scales</p>
          </div>
          <div className="category-card">
            <h3>🎨 Colors</h3>
            <p>Color palettes and schemes</p>
          </div>
          <div className="category-card">
            <h3>🌈 Backgrounds</h3>
            <p>Gradient patterns and backgrounds</p>
          </div>
          <div className="category-card">
            <h3>⭐ Icons</h3>
            <p>SVG icon collection</p>
          </div>
          <div className="category-card">
            <h3>🧩 Widgets</h3>
            <p>UI widgets and controls</p>
          </div>
          <div className="category-card">
            <h3>✨ Effects</h3>
            <p>CSS effects and visual treatments</p>
          </div>
          <div className="category-card">
            <h3>🎬 Animations</h3>
            <p>Motion and keyframe animations</p>
          </div>
        </div>
      </div>

      <div className="storybook-link">
        <p>View all components in Storybook</p>
      </div>
    </div>
  )
}

export default App
