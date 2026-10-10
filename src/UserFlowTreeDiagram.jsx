import React from 'react'

export default function UserFlowTreeDiagram() {
  return (
              <div className="cs12-uf-tree-inner">

                {/* Root Node: Fymble App */}
                <div className="cs12-uf-root-wrap">
                  <div className="cs12-uf-root-pill">
                    <span className="cs12-uf-root-icon">📱</span>
                    <span className="cs12-uf-root-text">Fymble App</span>
                  </div>
                </div>

                {/* SVG Top Fanout Connector to 7 Columns */}
                <div className="cs12-uf-svg-fanout-wrap">
                  <svg className="cs12-uf-fanout-svg" viewBox="0 0 1750 64" preserveAspectRatio="none">
                    {/* 7 curved paths from (875, 0) to each column center */}
                    <path d="M 875 0 C 875 32, 125 32, 125 64" />
                    <path d="M 875 0 C 875 32, 375 32, 375 64" />
                    <path d="M 875 0 C 875 32, 625 32, 625 64" />
                    <path d="M 875 0 L 875 64" />
                    <path d="M 875 0 C 875 32, 1125 32, 1125 64" />
                    <path d="M 875 0 C 875 32, 1375 32, 1375 64" />
                    <path d="M 875 0 C 875 32, 1625 32, 1625 64" />

                    <circle cx="125" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                    <circle cx="375" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                    <circle cx="625" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                    <circle cx="875" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                    <circle cx="1125" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                    <circle cx="1375" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                    <circle cx="1625" cy="62" r="3.5" className="cs12-uf-fanout-dot" />
                  </svg>
                </div>

                {/* 7 Pillar Columns Grid */}
                <div className="cs12-uf-columns-grid">

                  {/* =========================================================
                      COLUMN 1: Account & Access
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Account &amp; Access</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* Sign Up Group */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Sign Up</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Phone / Email</span></div>
                            <div className="cs12-uf-pill child-pill"><span>OTP Verification</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Create Profile</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Fitness Goals</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Login Group */}
                      <div className="cs12-uf-tree-group standalone-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Login</span>
                          </div>
                        </div>
                      </div>

                      {/* Forgot Password Group */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Forgot Password</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Reset via OTP</span></div>
                            <div className="cs12-uf-pill child-pill"><span>New Password</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      COLUMN 2: Home & Discovery
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Home &amp; Discovery</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* Home Dashboard */}
                      <div className="cs12-uf-tree-group standalone-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Home Dashboard</span>
                          </div>
                        </div>
                      </div>

                      {/* Nearby Gyms */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Nearby Gyms</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Map View</span></div>
                            <div className="cs12-uf-pill child-pill"><span>List View</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Search & Filters */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Search &amp; Filters</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Location</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Gym Type</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Amenities</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Price / Pass Type</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Gym Details */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Gym Details</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Photos &amp; Videos</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Facilities</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Timings &amp; Availability</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Reviews &amp; Ratings</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      COLUMN 3: Passes & Booking
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Passes &amp; Booking</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* Select Pass */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Select Pass</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Daily Pass (₹99)</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Weekly Pass (₹66/day)</span></div>
                            <div className="cs12-uf-pill child-pill"><span>14-Day Pass</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Choose Gym */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Choose Gym</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Select Date &amp; Time Slot</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Check Availability</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Booking Summary */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Booking Summary</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Gym Details</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Pass Type</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Date &amp; Time</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Price Breakdown</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Payment */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Payment</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>UPI / Card / Wallet</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Booking Confirmation */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Booking Confirmation</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Booking ID / Details</span></div>
                          </div>
                        </div>
                      </div>

                      {/* QR Check-in */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>QR Check-in</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Scan at Gym</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      COLUMN 4: Kyra AI Coach
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Kyra AI Coach</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* AI Chat */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>AI Chat</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Ask Questions</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Fitness Guidance</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Food Scanner */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Food Scanner</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Scan Food</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Get Nutrition Info</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Nutrition Tracking */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Nutrition Tracking</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Daily Meals</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Calories &amp; Macros</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Nutrition Insights</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Tracking */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Activity Tracking</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Workouts &amp; Steps</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Daily Progress</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Insights & Guidance */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Insights &amp; Guidance</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Personalized Tips</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Goal Recommendations</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      COLUMN 5: Activity & Insights
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Activity &amp; Insights</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* My Bookings */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>My Bookings</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Upcoming Bookings</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Past Bookings</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Workout History */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Workout History</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Gym Sessions</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Activity Logs</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Tracking */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Progress Tracking</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Weight</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Body Metrics</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Workout Frequency</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Calories & Activity */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Calories &amp; Activity</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Daily / Weekly / Monthly</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Charts &amp; Insights</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Analytics */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Analytics</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Personal Progress</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Fitness Streaks</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      COLUMN 6: Rewards & Referrals
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 12 20 22 4 22 4 12" />
                          <rect x="2" y="7" width="20" height="5" />
                          <line x1="12" y1="22" x2="12" y2="7" />
                          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Rewards &amp; Referrals</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* Refer a Friend */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Refer a Friend</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Share Referral Link</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Invite via WhatsApp</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Earn Rewards */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Earn Rewards</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>10% on Eligible Bookings</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Referral History */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Referral History</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Track Earnings</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Withdraw / Use Rewards</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      COLUMN 7: Profile & Support
                      ========================================================= */}
                  <div className="cs12-uf-pillar-col">
                    <div className="cs12-uf-pillar-header">
                      <span className="cs12-uf-pheader-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </span>
                      <span className="cs12-uf-pheader-title">Profile &amp; Support</span>
                    </div>

                    <div className="cs12-uf-pillar-body">
                      {/* Personal Details */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Personal Details</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Edit Profile</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Fitness Goals</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Membership & Passes */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Membership &amp; Passes</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Active Passes</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Expired Passes</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Payment History */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Payment History</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Transactions</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Invoices</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Notifications */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Notifications</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>Bookings</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Offers &amp; Updates</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Reminders</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Help & Support */}
                      <div className="cs12-uf-tree-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Help &amp; Support</span>
                          </div>
                        </div>
                        <div className="cs12-uf-children-cell">
                          <div className="cs12-uf-children-stack">
                            <div className="cs12-uf-pill child-pill"><span>FAQs</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Chat Support</span></div>
                            <div className="cs12-uf-pill child-pill"><span>Contact Us</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Logout */}
                      <div className="cs12-uf-tree-group standalone-group">
                        <div className="cs12-uf-parent-cell">
                          <div className="cs12-uf-pill parent-pill">
                            <span>Logout</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
  )
}
