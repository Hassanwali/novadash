import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Messages.module.css'

const channels = [
  { name: 'general', unread: 3 },
  { name: 'engineering', unread: 7 },
  { name: 'design' },
  { name: 'announcements', unread: 1, locked: true },
  { name: 'random' },
]

const directMessages = [
  { name: 'Alex Chen', color: '#8b5cf6', unread: 2, online: true },
  { name: 'Marcus Johnson', color: '#f59e0b', online: false },
  { name: 'Priya Nair', color: '#ec4899', unread: 4, online: true },
  { name: 'Jake Williams', color: '#22c55e', online: false },
]

const messages = [
  { sender: 'Alex Chen', time: 'Yesterday 4:10 PM', text: "Hey Sarah, can you review the auth PR when you get a chance? It's pretty straightforward — just the OAuth2 flow.", sent: false, avatarColor: '#8b5cf6' },
  { sender: 'You', time: 'Yesterday 4:22 PM', text: "Sure! I'll take a look tonight. Anything specific I should focus on?", sent: true },
  { sender: 'Alex Chen', time: 'Yesterday 4:25 PM', text: 'Just the token refresh logic around lines 140–180. The rest is standard. Thanks!', sent: false, avatarColor: '#8b5cf6' },
  { sender: 'You', time: 'Yesterday 6:01 PM', text: 'Reviewed and approved! Left one comment about error handling but it\'s non-blocking. Great work 👏', sent: true },
  { sender: 'Alex Chen', time: 'Today 8:55 AM', text: 'Awesome, merging now. Really appreciate it 🙏', sent: false, avatarColor: '#8b5cf6' },
]

function Messages() {
  const [activeChannel, setActiveChannel] = useState('general')
  const [activeDM, setActiveDM] = useState('Alex Chen')
  const [message, setMessage] = useState('')

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />

      <div className={styles.chatListPanel}>
        <div className={styles.searchBar}>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search messages..."
            className={styles.searchInput}
          />
        </div>

        <div>
          <p className={styles.sectionTitle}>
            CHANNELS <span>+</span>
          </p>
          {channels.map((channel, index) => (
            <div
              key={index}
              className={`${styles.channelItem} ${activeChannel === channel.name ? styles.channelItemActive : ''}`}
              onClick={() => setActiveChannel(channel.name)}
            >
              <div className={styles.channelLeft}>
                <span>{channel.locked ? '🔒' : '#'}</span>
                <span className={`${styles.channelName} ${activeChannel === channel.name ? styles.channelNameActive : ''}`}>
                  {channel.name}
                </span>
              </div>
              {channel.unread && (
                <span className={styles.unreadBadge}>{channel.unread}</span>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className={styles.sectionTitle}>
            DIRECT MESSAGES <span>+</span>
          </p>
          {directMessages.map((dm, index) => (
            <div
              key={index}
              className={`${styles.dmItem} ${activeDM === dm.name ? styles.dmItemActive : ''}`}
              onClick={() => setActiveDM(dm.name)}
            >
              <div className={styles.dmLeft}>
                <div className={styles.dmAvatar} style={{ backgroundColor: dm.color }}>
                  {dm.name.charAt(0)}
                  {dm.online && <div className={styles.dmOnlineDot} />}
                </div>
                <span className={styles.dmName}>{dm.name}</span>
              </div>
              {dm.unread && (
                <span className={styles.unreadBadge}>{dm.unread}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderLeft}>
            <div className={styles.chatAvatar}>
              A
              <div className={styles.chatOnlineDot} />
            </div>
            <div>
              <p className={styles.chatName}>Alex Chen</p>
              <p className={styles.chatStatus}>Online</p>
            </div>
          </div>
          <div className={styles.chatHeaderRight}>
            <span className={styles.chatHeaderIcon}>📞</span>
            <span className={styles.chatHeaderIcon}>📹</span>
            <span className={styles.chatHeaderIcon}>···</span>
          </div>
        </div>

        <div className={styles.messageFeed}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.messageGroup}>
              <div className={`${styles.messageMeta} ${msg.sent ? styles.messageMetaSent : ''}`}>
                <span className={styles.messageSender}>{msg.sender}</span>
                <span className={styles.messageTime}>{msg.time}</span>
              </div>
              <div className={`${styles.messageRow} ${msg.sent ? styles.messageRowSent : ''}`}>
                {!msg.sent && (
                  <div className={styles.messageAvatar} style={{ backgroundColor: msg.avatarColor }}>
                    {msg.sender.charAt(0)}
                  </div>
                )}
                <div className={`${styles.messageBubble} ${msg.sent ? styles.messageBubbleSent : ''}`}>
                  {msg.text}
                </div>
                {msg.sent && (
                  <div className={styles.messageAvatar} style={{ backgroundColor: '#3b82f6' }}>
                    S
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.messageInput}>
          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>📎</span>
            <input
              type="text"
              placeholder="Message Alex Chen..."
              className={styles.input}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className={styles.inputIcon}>😊</span>
            <span className={styles.inputIcon}>➤</span>
          </div>
          <p className={styles.inputHint}>Press Enter to send · Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  )
}

export default Messages