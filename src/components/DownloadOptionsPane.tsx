import CustomPaper from './CustomPaper'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import LinkIcon from '@mui/icons-material/Link'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import '../styles/components.css'
import { useState } from 'react'

const resolutions = [
  '240p',
  '360p',
  '480p',
  '720p',
  '1080p',
  '1440p',
  '2160p',
  '4320p',
]

function downloadVideo(url: string, selectedResolution: string) {}

export default function DownloadOptionsPane({ setSize }) {
  const [url, setUrl] = useState('')
  const [selectedResolution, setSelectedResolution] = useState('720p')
  const getResolutionVariant = (resolution: string) =>
    selectedResolution === resolution ? 'filled' : 'outlined'

  return (
    <CustomPaper setSize={setSize} resizable={false} size={[0, 0]}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <div className="download-options-content">
        <header className="download-options-header">
          <span className="download-options-eyebrow">// download</span>
          <h1 className="download-options-title">Paste a link.</h1>
          <p className="download-options-subtitle">
            Get the video in your preferred resolution.
          </p>
        </header>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <section className="download-options-section">
          <label className="download-options-label" htmlFor="video-url">
            // link
          </label>
          <TextField
            id="video-url"
            type="url"
            value={url}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUrl(event.target.value)
            }
            placeholder="https://..."
            fullWidth
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon sx={{ color: 'error.main' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#f5f2f1',
                backgroundColor: 'rgba(12, 12, 12, 0.55)',
                borderRadius: '12px',
                '& fieldset': { borderColor: 'rgba(215, 50, 32, 0.35)' },
                '&:hover fieldset': { borderColor: '#D73220' },
                '&.Mui-focused fieldset': { borderColor: '#D73220' },
              },
              '& .MuiInputBase-input': {
                fontSize: '1.2rem',
              },
              '& input::placeholder': {
                color: 'rgba(245, 242, 241, 0.4)',
                opacity: 1,
              },
            }}
          />
        </section>

        <section className="download-options-section">
          <span className="download-options-label">// resolution</span>
          <div className="download-options-resolutions">
            {resolutions.map((resolution) => (
              <Chip
                key={resolution}
                color="error"
                variant={getResolutionVariant(resolution)}
                label={resolution}
                onClick={() => setSelectedResolution(resolution)}
                sx={{
                  justifySelf: 'start',
                  borderRadius: '8px',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.975rem',
                  transition:
                    'transform 150ms ease, background-color 150ms ease',
                  '&:hover': { transform: 'translateY(-1px)' },
                }}
              />
            ))}
          </div>
        </section>

        <Button
          variant="contained"
          color="error"
          onClick={() => downloadVideo(url, selectedResolution)}
          startIcon={<DownloadOutlinedIcon />}
          sx={{
            marginTop: '8px',
            padding: '12px 16px',
            borderRadius: '10px',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.05rem',
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: '0 8px 24px rgba(215, 50, 32, 0.22)',
            '&:hover': {
              boxShadow: '0 10px 28px rgba(215, 50, 32, 0.32)',
            },
          }}
        >
          Download
        </Button>
      </div>
    </CustomPaper>
  )
}
