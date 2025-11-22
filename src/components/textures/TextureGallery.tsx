import { TexturedObject } from './TexturedObject';

export interface TextureItem {
  /** Path to the texture file */
  path: string;
  /** Name/label for the texture */
  name: string;
  /** Optional object type override */
  objectType?: 'sphere' | 'box' | 'torus' | 'cylinder' | 'plane';
}

export interface TextureGalleryProps {
  /** Array of textures to display */
  textures: TextureItem[];
  /** Number of columns in the gallery */
  columns?: number;
  /** Enable auto-rotation for all objects */
  rotate?: boolean;
  /** Height of each canvas */
  canvasHeight?: number;
}

export function TextureGallery({
  textures,
  columns = 3,
  rotate = true,
  canvasHeight = 300,
}: TextureGalleryProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '24px',
        padding: '16px',
      }}
    >
      {textures.map((texture, index) => (
        <div key={index} style={{ minWidth: 0 }}>
          <TexturedObject
            texturePath={texture.path}
            objectType={texture.objectType || 'sphere'}
            label={texture.name}
            rotate={rotate}
            height={canvasHeight}
          />
        </div>
      ))}
    </div>
  );
}
