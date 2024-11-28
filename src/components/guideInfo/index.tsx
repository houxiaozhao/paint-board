import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useBoardStore from '@/store/board'

import InfoIcon from '@/components/icons/info.svg?react'
import ZoomInfo from '../zoomInfo'
import Mask from '@/components/mask'
import GuideInfoSwiper from './guideInfoSwiper'

const GuideInfo: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { language, updateLanguage } = useBoardStore()
  const [showModal, setShowModal] = useState<boolean>(false)
  const handleChangLang = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLanguage)
    updateLanguage(newLanguage)
  }

  return (
    <>
      <div className="fixed bottom-5 left-5 flex flex-row justify-center items-center gap-2 px-2.5 py-1.5 rounded-full bg-[#eef1ff]">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
          <InfoIcon
            className="w-5 h-5 text-primary-content"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div
          className={`w-8 h-8 rounded-full cursor-pointer relative shrink-0 hover:opacity-80 ${
            language === 'en' ? 'bg-primary' : 'bg-primary'
          }`}
          onClick={handleChangLang}
        >
          <span
            className={`w-6 h-6 transition-all duration-500 absolute top-1 left-1 text-primary-content text-center origin-center ${
              language === 'en'
                ? 'opacity-100 rotate-0'
                : 'opacity-0 -rotate-45'
            }`}
          >
            中
          </span>
          <span
            className={`w-6 h-6 transition-all duration-500 absolute top-1 left-1 text-primary-content text-center text-base origin-center ${
              language === 'zh'
                ? 'opacity-100 rotate-0'
                : 'opacity-0 rotate-45'
            }`}
          >
            En
          </span>
        </div>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
          <ZoomInfo />
        </div>
      </div>
      <Mask
        show={showModal}
        clickMask={() => {
          setShowModal(false)
        }}
      >
        <div className="flex flex-col bg-white rounded-2xl overflow-hidden p-3 max-h-[80vh]">
          <div className="flex items-center justify-between font-bold mb-4 ">
            <div className="text-sm">
              repo:
              <a
                className="link link-primary inline-block ml-1 mr-3 break-all"
                href="https://github.com/LHRUN/paint-board"
                target="_blank"
                rel="noreferrer"
              >
                github.com/LHRUN/paint-board
              </a>
              {t('info.welecome')}⭐️
            </div>
          </div>
          <GuideInfoSwiper />
        </div>
      </Mask>
    </>
  )
}

export default GuideInfo
