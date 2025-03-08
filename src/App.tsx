import React, { useRef, useState } from 'react';
import { Monitor, Cloud, Settings, X, Search, Home, Layers, Users, Calendar, Bell, Plus, Languages } from 'lucide-react';
import Draggable from 'react-draggable';

function App() {
  const [elements, setElements] = useState({
    nav: true,
    hero: true,
    window: true,
    sidebar: true,
    icons: true
  });

  const [isRTL, setIsRTL] = useState(false);

  const navRef = useRef(null);
  const heroRef = useRef(null);
  const windowRef = useRef(null);
  const sidebarRef = useRef(null);
  const iconsRef = useRef(null);

  const deleteElement = (elementKey: keyof typeof elements) => {
    setElements(prev => ({ ...prev, [elementKey]: false }));
  };

  const toggleDirection = () => {
    setIsRTL(!isRTL);
    document.documentElement.dir = isRTL ? 'ltr' : 'rtl';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 flex flex-row-reverse ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Sidebar minimaliste */}
      <aside className={`w-20 bg-black/20 backdrop-blur-xl ${isRTL ? 'border-r' : 'border-l'} border-white/10 flex flex-col items-center py-8`}>
        <div className="mb-8">
          <Monitor className="text-white/90 w-8 h-8" />
        </div>
        <nav className="flex flex-col gap-6">
          <a href="#" className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors">
            <Home size={20} />
          </a>
          <a href="#" className="p-3 rounded-xl text-white/70 hover:bg-white/10 transition-colors">
            <Layers size={20} />
          </a>
          <a href="#" className="p-3 rounded-xl text-white/70 hover:bg-white/10 transition-colors">
            <Users size={20} />
          </a>
          <a href="#" className="p-3 rounded-xl text-white/70 hover:bg-white/10 transition-colors">
            <Calendar size={20} />
          </a>
          <a href="#" className="p-3 rounded-xl text-white/70 hover:bg-white/10 transition-colors">
            <Bell size={20} />
          </a>
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <button 
            onClick={toggleDirection}
            className="p-3 rounded-xl text-white/70 hover:bg-white/10 transition-colors"
            title={isRTL ? 'Switch to LTR' : 'Switch to RTL'}
          >
            <Languages size={20} />
          </button>
          <button className="p-3 rounded-xl text-white/70 hover:bg-white/10 transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-8">
        {/* Barre de recherche moderne */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-white/50`} size={20} />
            <input 
              type="text"
              placeholder={isRTL ? "البحث عن المشاريع والمهام..." : "Rechercher des projets, tâches..."}
              className={`w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl py-3 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-white placeholder-white/50 focus:outline-none focus:border-white/30`}
            />
          </div>
          <button className="bg-white/10 backdrop-blur-xl p-3 rounded-xl hover:bg-white/20 transition-colors text-white">
            <Plus size={20} />
          </button>
        </div>

        {/* Éléments draggables existants */}
        {elements.nav && (
          <Draggable nodeRef={navRef}>
            <nav ref={navRef} className="absolute z-10 flex justify-between items-center p-4 text-white bg-purple-800/30 backdrop-blur-sm rounded-lg border border-purple-500/30 m-4 cursor-move">
              <div className="text-xl font-bold">{isRTL ? 'الرئيسية' : 'Accueil'}</div>
              <div className="flex gap-6 items-center">
                <a href="#" className="hover:text-purple-200">{isRTL ? 'المنتجات' : 'Produits'}</a>
                <a href="#" className="hover:text-purple-200">{isRTL ? 'حول' : 'À propos'}</a>
                <a href="#" className="hover:text-purple-200">{isRTL ? 'التقنية' : 'Technologie'}</a>
                <a href="#" className="hover:text-purple-200">{isRTL ? 'اتصل بنا' : 'Contact'}</a>
                <button className="bg-purple-500 px-4 py-1 rounded-full hover:bg-purple-600">
                  {isRTL ? 'تسجيل الدخول' : 'Connexion'}
                </button>
                <button 
                  onClick={() => deleteElement('nav')}
                  className={`${isRTL ? 'mr-4' : 'ml-4'} p-1 hover:bg-red-500/20 rounded-full transition-colors`}
                >
                  <X className="text-red-300" size={20} />
                </button>
              </div>
            </nav>
          </Draggable>
        )}

        {elements.hero && (
          <Draggable nodeRef={heroRef}>
            <div ref={heroRef} className={`absolute z-10 top-32 ${isRTL ? 'right-10' : 'left-10'} max-w-lg bg-purple-800/30 backdrop-blur-sm rounded-lg border border-purple-500/30 p-8 cursor-move`}>
              <div className="flex justify-between items-start">
                <h1 className="text-5xl font-bold text-white mb-6">
                  {isRTL ? (
                    <>
                      تطبيقات، برمجيات<br />
                      وتطوير الويب
                    </>
                  ) : (
                    <>
                      Application, Logiciel<br />
                      Et Développement Web
                    </>
                  )}
                </h1>
                <button 
                  onClick={() => deleteElement('hero')}
                  className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
                >
                  <X className="text-red-300" size={20} />
                </button>
              </div>
              <p className="text-purple-200 mb-8 max-w-md">
                {isRTL 
                  ? 'قم بإنشاء تطبيقات ويب حديثة وفعالة باستخدام خبرتنا في التطوير.'
                  : 'Créez des applications web modernes et performantes avec notre expertise en développement.'
                }
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'}
                  className="px-6 py-3 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-500 px-8 py-3 rounded-full text-white hover:bg-purple-600 transition-colors">
                  {isRTL ? 'إرسال' : 'Envoyer'}
                </button>
              </div>
            </div>
          </Draggable>
        )}

        {elements.window && (
          <Draggable nodeRef={windowRef}>
            <div ref={windowRef} className={`absolute z-10 top-32 ${isRTL ? 'left-10' : 'right-10'} w-[300px] h-[200px] bg-blue-800/30 backdrop-blur-sm rounded-lg border border-blue-500/30 p-4 cursor-move`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <button 
                  onClick={() => deleteElement('window')}
                  className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
                >
                  <X className="text-red-300" size={20} />
                </button>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-blue-700/50 rounded"></div>
                <div className="h-4 bg-blue-700/50 rounded w-3/4"></div>
              </div>
            </div>
          </Draggable>
        )}

        {elements.sidebar && (
          <Draggable nodeRef={sidebarRef}>
            <div ref={sidebarRef} className={`absolute z-10 bottom-10 ${isRTL ? 'right-10' : 'left-10'} w-[200px] h-[400px] bg-purple-800/30 backdrop-blur-sm rounded-lg border border-purple-500/30 cursor-move`}>
              <div className="flex justify-between p-4">
                <div className="w-12 h-12 rounded-full bg-purple-700/50"></div>
                <button 
                  onClick={() => deleteElement('sidebar')}
                  className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
                >
                  <X className="text-red-300" size={20} />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div className="h-4 bg-purple-700/50 rounded"></div>
                <div className="h-4 bg-purple-700/50 rounded w-3/4"></div>
              </div>
            </div>
          </Draggable>
        )}

        {elements.icons && (
          <Draggable nodeRef={iconsRef}>
            <div ref={iconsRef} className={`absolute z-10 bottom-20 ${isRTL ? 'left-20' : 'right-20'} flex items-center gap-4 cursor-move bg-purple-800/30 backdrop-blur-sm rounded-lg border border-purple-500/30 p-4`}>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                <Cloud className="text-blue-300" size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                <Settings className="text-purple-300" size={24} />
              </div>
              <button 
                onClick={() => deleteElement('icons')}
                className={`${isRTL ? 'mr-2' : 'ml-2'} p-1 hover:bg-red-500/20 rounded-full transition-colors`}
              >
                <X className="text-red-300" size={20} />
              </button>
            </div>
          </Draggable>
        )}
      </main>
    </div>
  );
}

export default App;